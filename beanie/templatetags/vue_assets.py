import json
import logging
import os
import sys
from os import path
import os.path

import django
from django import template
from django.conf import settings
from django.contrib.admin import AdminSite
from django.http import HttpRequest
from django.templatetags.static import static
from django.urls import reverse, resolve
from beanie.menu import MenuManager

register = template.Library()

@register.filter(name='lookup')
def lookup(value, arg):
    return value[arg]

@register.simple_tag(takes_context=True)
def get_manifest(context, request):
    """
    :type request: WSGIRequest
    """
    if not isinstance(request, HttpRequest):
        return None

    if 'runserver' in sys.argv:
        print(context['debug'])


    manifest = os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        "static",
        "beanie",
        "_assets",
        "manifest.json",
    )

    static_assets = {}

    if path.exists(manifest):
        with open(manifest) as json_file:
            assets = json.load(json_file)
            for k, asset in assets.items():
                static_assets.update({
                    k:static(f"beanie/_assets/{asset}")
                })
    # else:
    #     static_assets.update({
    #         'style.css':'',
    #         'index.js':'http://localhost:3000/vite/client',
    #         'main.js':'http://localhost:3000/src/main.js'
    #     })

    return static_assets

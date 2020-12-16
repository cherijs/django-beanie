from django.apps import apps
from django.template import VariableDoesNotExist

from beanie.apps import DjangoBeanieConfig


def get_config_instance(app_name=None):
    """
    :rtype: DjangoBeanieConfig()
    """
    try:
        config = apps.get_app_config(app_name or 'beanie')
        if isinstance(config, DjangoBeanieConfig):
            return config
    except LookupError:
        pass
    return apps.get_app_config('beanie')


def get_config(param=None, request=None):
    beanie_config = get_config_instance(get_current_app(request) if request else None)

    if param:
        value = getattr(beanie_config, param, None)
        if value is None:
            value = getattr(DjangoBeanieConfig, param, None)
        return value

    return beanie_config


def get_current_app(request):
    try:
        return request.current_app
    except (VariableDoesNotExist, AttributeError):
        pass
    return None

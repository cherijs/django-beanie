from django.apps import AppConfig


class DjangoBeanieConfig(AppConfig):
    name = 'beanie'
    # Define menu
    menu = []

    # Automatically add home link
    menu_show_home = True

    # Define callback / handler to change menu before it is getting rendered
    menu_handler = None

    def __init__(self, app_name, app_module):
        super().__init__(app_name, app_module)

    def ready(self):
        super().ready()

from beanie.apps import DjangoBeanieConfig
from beanie.menu import (
    ChildItem,
    ParentItem,
)


class BeanieConfig(DjangoBeanieConfig):
    menu = (
        ParentItem(
            "Lapas",
            children=[
                ChildItem("Lapas", model="flatpages.flatpage",),
                ChildItem(model="navigation.nav", label="Navigācija",),
            ],
        ),
        ParentItem(
            "Abillio",
            children=[
                # ChildItem("Lomas", model="abillio.loma",),
            ],
        ),
        ParentItem(
            "Users",
            children=[
                ChildItem("Online users", model="user.usersonline"),
                ChildItem(model="user.user"),
                ChildItem(model="mail.email"),
                ChildItem(model="admin.logentry"),
                ChildItem(model="user.userrequest"),
                # ChildItem('User groups', 'auth.group'),
            ],
            icon="fa fa-users",
        ),
    )

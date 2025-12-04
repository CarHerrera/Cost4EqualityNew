

from django.urls import path

from home.views import HomePageView, AboutPageView, NNPageView, GePageView, PBPageView
BASE = 'Cost4Equality/'
urlpatterns = [
    path(BASE+"", HomePageView.as_view(), name="home"),
    path(BASE+'about/', AboutPageView.as_view(), name='about'),
    path(BASE+'NetNeutrality/', NNPageView.as_view(), name='NNeutrality'),
    path(BASE+'Gentrification/', GePageView.as_view(), name='Gentrifications'),
    path(BASE+'PoliceBrutality/', PBPageView.as_view(), name='PB'),
]


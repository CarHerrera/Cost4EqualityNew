

from django.urls import path

from home.views import HomePageView, AboutPageView, NNPageView, GePageView, PBPageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path('about/', AboutPageView.as_view(), name='about'),
    path('NetNeutrality/', NNPageView.as_view(), name='NNeutrality'),
    path('Gentrification/', GePageView.as_view(), name='Gentrifications'),
    path('PoliceBrutality/', PBPageView.as_view(), name='PB'),
]


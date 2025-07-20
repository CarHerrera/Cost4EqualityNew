from django.views.generic.base import TemplateView

# Create your views here.
class HomePageView(TemplateView):
    template_name = 'home.html'
class AboutPageView(TemplateView):
    template_name = 'about.html'

class NNPageView(TemplateView):
    template_name = 'NetNeutrality.html'
class GePageView(TemplateView):
    template_name = 'Gentrification.html'
class PBPageView(TemplateView):
    template_name = 'PB.html'

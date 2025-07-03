from django.db import models

from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField

class AboutPage(Page):
    description = models.TextField(blank=True)
    
    content_panels = Page.content_panels + [
        FieldPanel("description")
    ]
    
    api_fields = [
        APIField("description"),
    ]
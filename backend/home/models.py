from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.images.models import Image
from wagtail.api import APIField

class HomePage(Page):
    banner_text = models.TextField(blank=True)
    banner_image = models.ForeignKey(
        Image,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    content_panels = Page.content_panels + [
        FieldPanel("banner_text"),
        FieldPanel("banner_image"),
    ]

    api_fields = [
        APIField("banner_text"),
        APIField("banner_image"),
    ]

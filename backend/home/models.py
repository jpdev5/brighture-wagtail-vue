from django.db import models

from wagtail.models import Page
from wagtail.fields import StreamField
from wagtail.blocks import CharBlock, RichTextBlock
from wagtail.images.blocks import ImageChooserBlock
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField

class HomePage(Page):
    intro = models.TextField(blank = True);
    body = StreamField([
        ("heading", CharBlock(classname="full title")),
        ("paragraph", RichTextBlock()),
        ("image", ImageChooserBlock())
    ], use_json_field=True)
    
    content_panels = Page.content_panels + [
        FieldPanel("intro"),
        FieldPanel("body")
    ]
    
    api_fields = [
        APIField("intro"),
        APIField("body"),
        APIField("title"),
    ]
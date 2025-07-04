from django.db import models

from wagtail import blocks
from wagtail.models import Page
from wagtail.fields import StreamField
from wagtail.blocks import RichTextBlock, CharBlock, IntegerBlock
from wagtail.admin.panels import FieldPanel
from wagtail.images.blocks import ImageChooserBlock
from wagtail.api import APIField

class TestimonialBlock(blocks.StructBlock):
    testimony_name = CharBlock(required=True, help_text="Name of the person giving the testimonial")
    testimony_age = IntegerBlock(help_text="Age of the person giving the testimonial")
    testimony_position = CharBlock(required=True, help_text="Position of the person giving the testimonial");
    testimonial_context = RichTextBlock(required=True, help_text="The testimonial text");
    testimony_photo = ImageChooserBlock(required=True, help_text="Photo of the person giving the testimonial")
    
    class Meta:
        icon = "user"
        label = "Testimonial"

class TestimonialPage(Page):
    testimonials = StreamField([
        ("testimonial", TestimonialBlock())
    ], use_json_field=True, default=list, blank=True)
    
    content_panels = Page.content_panels + [
        FieldPanel("testimonials")
    ]
    
    api_fields = [
        APIField("testimonials")
    ]
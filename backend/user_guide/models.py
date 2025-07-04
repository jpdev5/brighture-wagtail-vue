from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock
from wagtail.fields import StreamField
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField

class GuideBlock(blocks.StructBlock):
    guide_title = blocks.CharBlock(required=True, help_text="Title for the guide")
    guide_context = blocks.RichTextBlock(required=True)
    guide_image = ImageChooserBlock(required=False)

    class Meta:
        icon = "list-ul"
        label = "Guide"

class UserGuidePage(Page):
    guides = StreamField([
        ("guide", GuideBlock())
    ], use_json_field=True, default=list, blank=True)

    content_panels = Page.content_panels + [
        FieldPanel("guides")
    ]

    api_fields = [
        APIField("guides")
    ]

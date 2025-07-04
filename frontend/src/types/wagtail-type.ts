interface ITestimonial {
  id: number;
  title: string;
  testimonials: [
    {
      id: string;
      type: string;
      value: {
        testimonial_context: string;
        testimony_age: number;
        testimony_name: string;
        testimony_photo: number;
        testimony_position: string;
      };
    },
  ];
}

interface IHome {
  id: number;
  title: string;
  banner_text: string;
  banner_image: {
    id: string;
    title: string;
    meta: {
      download_url: string;
    };
  };
}

interface IAbout {
  id: number;
  title: string;
  description: string;
}

interface IUserGuide {
  id: number;
  title: string;
  guides: [
    {
      id: string;
      type: string;
      value: {
        guide_context: string;
        guide_image: number;
        guide_title: string;
      };
    },
  ];
}

export type { ITestimonial, IHome, IAbout, IUserGuide };

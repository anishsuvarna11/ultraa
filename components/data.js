import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../components/Screenshot_2023-06-18_at_2.36.36_PM-removebg-preview.png";
import benefitTwoImg from "../components/Screenshot_2023-06-18_at_2.36.44_PM-removebg-preview.png";

const benefitOne = {
  title: "Benefits",
  desc: "With UltraGrasp, our customers will never be dissapointed. We are committed for end-end product solutions and service",
  image: benefitOneImg,
  bullets: [
    {
      title: "Mobility",
      desc: "Our software model, which is based on Generative AI, Vision Transformers, and Deep learning, is trained on countless amounts of data, and outperforms existing models in grasping. We also provide the first platform for autonomous grasping without the aid of EMG or other invasive measures.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Comfort",
      desc: "Integrating soft carbon fibers and acrylics into the device, enabling freedom and comfort for all users. UltraGrasp is also completely non-invasive, removing any skin complications or fatigue caused by traditional prosthetic arms.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Affordability",
      desc: "Base model prices are $4999.99, with monthly subscriptions for software packages/updates as needed. This price range is far more cost-effective than existing devices on the market, allowing for more customer retainment and acquisition.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Specifications",
  desc: "Each unit of UltraGrasp is precisely 3D printed and centrally manufactured, and is integrated with the softwre packages using a powerful computing unit, along with e 3D depth camera placed in the palm of the hand.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Multi-Articulation",
      desc: "5-Fingered-Arm allows for replicating human actions and physical capabilities, including a customizable size.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Intel Real Sense D405",
      desc: "Located in the palm of the hand, provides the core 3D image data, and subsequent virtual views, required to run the vision transformers and machine learning workflow.",
      icon: <AdjustmentsIcon />,
    },
    
  ],
};

export { benefitOne, benefitTwo };

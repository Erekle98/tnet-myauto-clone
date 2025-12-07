import {
  CarIcon,
  MotorcycleIcon,
  TractorIcon,
} from "../assets/images/TransportTypeIcons";

export const TRANSPORT_TYPES = [
  {
    id: 1,
    icon: CarIcon,
  },
  {
    id: 2,
    icon: TractorIcon,
  },
  {
    id: 3,
    icon: MotorcycleIcon,
  },
];

export const DEAL_TYPES = [
  {
    id: 1,
    name: "იყიდება",
    value: 0,
  },
  {
    id: 2,
    name: "ქირავდება",
    value: 1,
  },
];

export const PERIODS = [
  {
    id: 1,
    name: "ბოლო 1 საათი",
    value: "1h",
  },
  {
    id: 2,
    name: "ბოლო 2 საათი",
    value: "2h",
  },
  {
    id: 3,
    name: "ბოლო 3 საათი",
    value: "3h",
  },
  {
    id: 4,
    name: "ბოლო 1 დღე",
    value: "1d",
  },
  {
    id: 5,
    name: "ბოლო 2 დღე",
    value: "2d",
  },
  {
    id: 6,
    name: "ბოლო 3 დღე",
    value: "3d",
  },
  {
    id: 7,
    name: "ბოლო 1 კვირა",
    value: "1w",
  },
  {
    id: 8,
    name: "ბოლო 2 კვირა",
    value: "2w",
  },
  {
    id: 9,
    name: "ბოლო 3 კვირა",
    value: "3w",
  },
];

export const SORTS = [
  {
    id: 1,
    name: "თარიღი კლებადი",
  },
  {
    id: 2,
    name: "თარიღი ზრდადი",
  },
  {
    id: 3,
    name: "ფასი კლებადი",
  },
  {
    id: 4,
    name: "ფასი ზრდადი",
  },
  {
    id: 5,
    name: "გარბენი კლებადი",
  },
  {
    id: 6,
    name: "გარბენი ზრდადი",
  },
];

export type YaerData = {
  year: number;
  value: number;
  rate?: number;
};

export type PerYearData = {
  label: string;
  data: YaerData[];
};

export type PerYear = {
  message: null;
  result: {
    boundaryYear: number;
    data: PerYearData[];
  };
};

export type PerYearResult = {
  id: number;
  data: YaerData[];
};

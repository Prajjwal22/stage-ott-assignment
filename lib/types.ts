//Type Definitions for Different Data

type seriesData = {
  rootUrlHorizontal: string;
  rootUrlVertical: string;
  rowData: rowData[];
};

type rowData = {
  _id: string;
  horizontal: string;
  vertical: string;
};

type featuredData = {
  rootUrl: string;
  carousel: carouselData[];
};

type carouselData = {
  _id: string;
  ratio1: string;
  ratio2: string;
  ratio3: string;
};



type Language = {
  language:string
  image:string
}
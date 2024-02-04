let baseURL = "https://dev-api.stage.in/";

export const getRowData = async () => {
  try {
    let resp = await fetch(`${baseURL}v23/assignment/row-data`, {
      next: { revalidate: 3600 },
    });
    let data = await resp.json();
    return data;
  } catch (err) {
    console.log("error fetching data!");
  }
};

export const getCarouselData = async () => {
  try {
    let resp = await fetch(`${baseURL}v23/assignment/carousel-data`);
    let data = await resp.json();
    return data;
  } catch (err) {
    console.log("error fetching data!", err);
  }
};

let baseURL = process.env.API_URI;

export const getRowData = async () => {
  try {
    let resp = await fetch(`${baseURL}v23/assignment/row-data`, {
      next: { revalidate: 3600 }, //An hour to revalidate this API
    });
    let data = await resp.json();
    return data;
  } catch (err) {
    console.log("error fetching data!", err);
  }
};

export const getCarouselData = async () => {
  try {
    let resp = await fetch(`${baseURL}v23/assignment/carousel-data`, {
      next: { revalidate: 60 }, //60 seconds to revalidate this API
    });
    let data = await resp.json();
    return data;
  } catch (err) {
    console.log("error fetching data!", err);
  }
};

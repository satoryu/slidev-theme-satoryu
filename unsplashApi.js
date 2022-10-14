import "whatwg-fetch";
import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
});

function getPhoto(photoId) {
  const handleResponse = function(response) {
    const user = {
      name: response.response.user.name,
      link: response.response.user.links.html
    }
    const styles = {
      backgroundImage: `url(${response.response.urls.full})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }

    return { styles, user }
  }
  const handleError = function(err) {
    console.error(err)

    return err
  }

  return unsplashApi.photos.get({photoId: photoId})
      .then(handleResponse)
      .catch(handleError)
}

export { getPhoto }

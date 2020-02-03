import { handleResponse, handleError } from "./apiUtils";
const baseUrl =
  process.env.REACT_APP_API_URL +
  "/issues/?api_key=154e1d32d0e2c95e7232dab8bb4e7efb9b7febd8&field_list=date_added,image,name,issue_number,id&format=json&sort=date_added:desc";

export function getIssues() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCourseBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(courses => {
        if (courses.length !== 1) throw new Error("Course not found: " + slug);
        return courses[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

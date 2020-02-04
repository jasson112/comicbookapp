import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL;
const controller = new AbortController();

export function getIssues() {
  return fetch(
    baseUrl +
      "/issues/?api_key=154e1d32d0e2c95e7232dab8bb4e7efb9b7febd8&field_list=date_added,image,name,issue_number,id&format=json&sort=cover_date:desc"
  )
    .then(handleResponse)
    .catch(handleError);
}

export function getIssueById(id) {
  return fetch(
    baseUrl +
      "/issue/4000-" +
      id +
      "/?api_key=154e1d32d0e2c95e7232dab8bb4e7efb9b7febd8&field_list=image,character_credits,team_credits,location_credits,concept_credits&format=json"
  )
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(issues => {
        if (issues.number_of_total_results !== 1)
          throw new Error("Course not found: " + id);
        return issues.results; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function getIssueImageBy(type, id) {
  let type_id = 4005;
  if (type === "concept") {
    type_id = 4015;
  } else if (type === "location") {
    type_id = 4020;
  } else if (type === "team") {
    type_id = 4060;
  }
  return fetch(
    baseUrl +
      "/" +
      type +
      "/" +
      type_id +
      "-" +
      id +
      "/?api_key=154e1d32d0e2c95e7232dab8bb4e7efb9b7febd8&field_list=image&format=json"
  )
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(issues => {
        if (issues.number_of_total_results !== 1)
          throw new Error("Course not found: " + id);
        return issues.results.image; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function finishHim() {
  controller.abort();
}

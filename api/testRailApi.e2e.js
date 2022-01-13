const request = require("supertest");
const { expect } = require("chai");

const BASE_URL = `https://nickkarsosi.testrail.io/`;

const HEADER_FIELDS = {
  AUTHORIZATION: {
    AUTH: "Authorization",
    TOKEN: "Basic bmlja2thcnNvc2lAZ21haWwuY29tOnZRZXpBOXBULjJ4NVZlZlFjaEJI",
  },
  CONTENT_TYPE: "Content-Type",
  APPLICATION_JSON: "application/json",
};

const REQUEST = {
  GET: {
    PROJECTS: `index.php?/api/v2/get_projects`,
    BY_EMAIL: `index.php?/api/v2/get_user_by_email&email=nickkarsosi@gmail.com`,
    CASES: `index.php?/api/v2/get_cases/1&suite_id=1`,
    STATUSES: `index.php?/api/v2/get_statuses`,
    SUITES: `index.php?/api/v2/get_suite/1`,
  },
  POST: {
    CREAT: `index.php?/api/v2/add_project`,
    DELETE: `index.php?/api/v2/delete_project/8`, // следующий ид = 8
    SECTION: `index.php?/api/v2/add_section/`,
    DELETE_SECTION: `index.php?/api/v2/delete_section/9`, // следующий id = 9
    ADD_CASE: `index.php?/api/v2/add_case/8`, // следующий ид = 8
    DELETE_CASES: `index.php?/api/v2/delete_cases/1&soft=1`,
  },
};

const STATUS_CODE = {
  OK: 200,
};

const app = request(BASE_URL);

describe("TestRail API", function () {
  it("Should get projects with login", function (done) {
    app
      .get(REQUEST.GET.PROJECTS)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should get by email with login", function (done) {
    app
      .get(REQUEST.GET.BY_EMAIL)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should creat new project with login", function (done) {
    app
      .post(REQUEST.POST.CREAT)
      .send({
        name: "New project using API",
        announcement: "This is the description for the project",
        show_announcement: true,
      })
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should delete new project with login", function (done) {
    app
      .post(REQUEST.POST.DELETE)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .set(HEADER_FIELDS.CONTENT_TYPE, HEADER_FIELDS.APPLICATION_JSON)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should creat new section with login", function (done) {
    app
      .post(REQUEST.POST.SECTION)
      .send({
        suite_id: 1,
        name: "This is a new section",
      })
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should DELETE new section with login", function (done) {
    app
      .post(REQUEST.POST.DELETE_SECTION)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .set(HEADER_FIELDS.CONTENT_TYPE, HEADER_FIELDS.APPLICATION_JSON)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should add new case with login", function (done) {
    app
      .post(REQUEST.POST.ADD_CASE)
      .send({
        section_id: 1,
        title: "Case using API",
      })
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .set(HEADER_FIELDS.CONTENT_TYPE, HEADER_FIELDS.APPLICATION_JSON)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should get cases with login", function (done) {
    app
      .get(REQUEST.GET.CASES)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should DELETE new cases with login", function (done) {
    app
      .post(REQUEST.POST.DELETE_CASES)
      .send({
        case_ids: [5], // next id = 6
      })
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .set(HEADER_FIELDS.CONTENT_TYPE, HEADER_FIELDS.APPLICATION_JSON)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should get statuses with login", function (done) {
    app
      .get(REQUEST.GET.STATUSES)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should get suites with login", function (done) {
    app
      .get(REQUEST.GET.SUITES)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });
});

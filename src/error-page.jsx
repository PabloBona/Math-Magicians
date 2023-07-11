import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="container">
      <div className="row d-flex" id="error-page">
        <div className="col-8 mx-auto text-light my-5 py-5 fs-3">
          <h1 className="d-flex justify-content-center">Oops!</h1>
          <p className="d-flex justify-content-center my-5">Sorry, an unexpected error has occurred.</p>
          <p className="d-flex justify-content-center my-5 text-danger">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </section>
  );
}

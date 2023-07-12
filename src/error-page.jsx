import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="container">
      <div className="row d-flex" id="error-page">
        <div className="col-8 mx-auto text-light my-5 py-5 fs-3 carrot">
          <h1 className="d-flex justify-content-center carrot p-2">Oops!</h1>
          <p className="d-flex justify-content-center my-5 carrot">Sorry, an unexpected error has occurred.</p>
          <p className="d-flex justify-content-center my-5 carrot">
            <i className="carrot text-danger">{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </section>
  );
}

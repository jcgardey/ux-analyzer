export const Setup = ({ version }) => (
  <div>
    <p>
      To start logging user sessions for this version, paste the following code
      in your application:
    </p>
    <div className="my-2 bg-gray-200 rounded p-2 w-full">
      <code>
        {`<script src="https://s3.amazonaws.com/selfrefactoring/micro-measures/MicroMeasuresLogger.js"></script>`}
        <br />
        {`<script>`} <br />
        {`window.onload = function () {`} <br />
        {`  new MicroMeasuresLogger("${version.token}");`} <br />
        {`}`} <br />
        {`</script>`}
      </code>
    </div>
  </div>
);


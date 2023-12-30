const Basic = () => {
  return (
    <div>
      <img
        src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
        alt="Logo"
      />

      <h3
        style={{
          color: "seagreen",
          fontSize: "30px",
          marginBottom: "10px",
        }}
      >
        Q: What Day it is?
      </h3>

      <p>A: It is Day {new Date().getDate()}</p>
    </div>
  );
};

export default Basic;

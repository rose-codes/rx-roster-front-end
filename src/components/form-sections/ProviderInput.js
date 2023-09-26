export const ProviderInput = ({ errors, register }) => {
  return (
    <section className="grid-row-start-2">
      <div className="grid grid-rows-3">
        <div className="row-start-1">
          <div className="input-group">
            <label>Prescriber:</label>
            <input
              type="text"
              {...register("prescriber")}
              placeholder="Prescriber"
              className="input-field form-text-input"
            ></input>
          </div>
        </div>
        <div className="row-start-2">
          <div className="input-group">
            <label>Prescribed For:</label>
            <input
              type="text"
              {...register("prescribedFor")}
              placeholder="What was the medication prescribed/taken for?"
              className="input-field form-text-input"
            ></input>
          </div>
        </div>
        <div className="row-start-3">
          <div className="input-group row-start-3">
            <label>Instructions:</label>
            <input
              type="text"
              {...register("instructions")}
              placeholder="Instructions"
              className="input-field form-text-input"
            ></input>
          </div>
        </div>
      </div>
    </section>
  );
};

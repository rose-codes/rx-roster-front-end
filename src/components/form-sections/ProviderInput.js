export const ProviderInput = ({ errors, register }) => {
  return (
    <div className="grid grid-rows-3">
      <div className="input-field row-start-1" controlId="prescriber">
        <label>Prescriber:</label>
        <input
          type="text"
          {...register("prescriber")}
          placeholder="Prescriber"
        ></input>
      </div>
      <div className="input-field row-start-2" controlId="prescribedFor">
        <label>Prescribed For:</label>
        <input
          type="text"
          {...register("prescribedFor")}
          placeholder="What was the medication prescribed/taken for?"
        ></input>
      </div>
      <div className="input-field row-start-3" controlId="instructions">
        <label>Instructions:</label>
        <input
          type="text"
          {...register("instructions")}
          placeholder="Instructions"
        ></input>
      </div>
    </div>
  );
};

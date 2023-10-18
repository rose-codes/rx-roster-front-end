import NewMedForm from "../components/NewMedForm";
const NewMedFormPage = () => {
  return (
    <section className="max-w-full flex basis-0 flex-col grow shrink flex-nowrap px-6 pb-16 xl:pr-2 pt-6">
      <div className="dashboard-container gap-4 flex flex-col">
        <div className="header row-span-1 col-span-2 dashboard-heading">
          <h3 className="mb-3 font-bold">Add a Medication</h3>
        </div>

        <div className="self-center">
          <NewMedForm />
        </div>
      </div>
    </section>
  );
};

export default NewMedFormPage;

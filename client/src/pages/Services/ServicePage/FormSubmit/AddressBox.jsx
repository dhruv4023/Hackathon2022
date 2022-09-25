import React from "react";

function AddressBox({ setVillage }) {
  const villages = [
    "select",
    "Akedi",
    "Akesan",
    "Aligadh",
    "Ambaliyal",
    "Ambetha",
    "Angola",
    "Antroli",
    "Asmapura",
    "Badargadh",
    "Badarpura",
    "Bhagal",
    "Bhatamal",
    "Bhatwadi",
    "Bhavisana",
    "Bhutedi",
    "Chadotar",
    "Chandisar",
    "Chekhala",
    "Chitrasani",
    "Dalwada",
    "Delwada",
    "Dhandha",
    "Dhaniyana",
    "Dhelana",
    "Esbipura",
    "Fatepur",
    "Gadh",
    "Galwada",
    "Gathaman",
    "Godh",
    "Gola",
    "Gopalpura",
    "Hasanpur",
    "Hathidra",
    "Hebatpur",
    "Hoda",
    "Jadial",
    "Jagana",
    "Jasleni",
    "Jaspuriya",
    "Jorapura",
    "Juvol",
    "Kamalpur",
    "Karjoda",
    "Kharodiya",
    "Khasa",
    "Khemana",
    "Khodla",
    "Kotda",
    "Kumbhalmer",
    "Kumbhasan",
    "Kumpar",
    "Kushakal",
    "Lalawada",
    "Laxmanpura",
    "Lunwa",
    "Madana",
    "Malan",
    "Malana",
    "Malpuriya",
    "Manaka",
    "Manpur",
    "Merwada",
    "Moriya",
    "Mota",
    "Nalasar",
    "Pakhanwa",
    "Parpada",
    "Patosan",
    "Pedagara",
    "Pipli",
    "Pirojpura",
    "Rajpur",
    "Rampura",
    "Ranawas",
    "Ratanpur",
    "Ruppura",
    "Sadarpur",
    "Sagrosana",
    "Salempura",
    "Salla",
    "Sambarda",
    "Samdhi",
    "Sangla",
    "Sangra",
    "Saripada",
    "Sasam",
    "Sedrasana",
    "Semodra",
    "Songadh",
    "Sundha",
    "Surajpura",
    "Takarwada",
    "Talepura",
    "Tokariya",
    "Ukarda",
    "Vadhana",
    "Vagda",
    "Varwadia",
    "Vasan",
    "Vasani",
    "Vasda",
    "Vasna",
    "Vedancha",
    "Virpur",
  ];
  return (
    <>
      <div className="InputField_cont_servicePage">
        <div className="label_FormSubmit">State</div>
        <div className="inputTag_FormSubmit">:Gujarat</div>
      </div>
      <div className="InputField_cont_servicePage">
        <div className="label_FormSubmit">District</div>
        <div className="inputTag_FormSubmit">:Banaskantha</div>
      </div>
      <div className="InputField_cont_servicePage">
        <div className="label_FormSubmit">Taluka</div>
        <div className="inputTag_FormSubmit">:Palanpur</div>
      </div>
      <div className="InputField_cont_servicePage">
        <div className="label_FormSubmit">Village</div>
        <div className="inputTag_FormSubmit">
          :
          <select
            onChange={(e) => {
              setVillage(e.target.value === "select" ? null : e.target.value);
            }}
          >
            {villages.map((vlj) => {
              return (
                <option key={vlj} value={vlj}>
                  {vlj}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default AddressBox;

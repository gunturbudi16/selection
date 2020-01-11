biodata("Guntur Budi Kurniawan", 24);

function biodata(string, number) {
  const biodata = {
    name: string,
    umur: number,
    address: "Komp.Depag rt 001/015 blok a 42",
    hobbies: ["Futsal", "ngoding", "main Game"],
    is_married: false,
    list_school: [
      {
        name: "Bina Nusantara University",
        year_in: "2013",
        year_out: "2019",
        major: "Management"
      }
    ],
    skills: [
      {
        skill_name: "laravel",
        level: "advanced"
      },
      {
        skill_name: "reactjs",
        level: "advanced"
      },
      {
        skill_name: "html",
        level: "advanced"
      },
      {
        skill_name: "javascript",
        level: "advanced"
      },
      {
        skill_name: "jquery",
        level: "advanced"
      }
    ],
    interest_in_coding: true
  };
  console.log(biodata);
}

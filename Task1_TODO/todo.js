const month = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  const lang = navigator.language;
  const d = new Date();
  let nme = month[d.getMonth()];
  let daynumber = d.getDate();
  let dayname = d.toLocaleString(lang, { weekday: "long" });
  document.querySelector(".month").innerHTML = nme;
  document.querySelector(".date").innerHTML = dayname + "," + daynumber + "th";
  
  document.querySelector(".button_div").onclick = () => {
    if (document.querySelector(".search_input").value.length == 0) {
      alert("You Must Write Something");
    } else {
      document.querySelector(".tasklist_div").innerHTML += `
          <div class="task_list">
              <input type="checkbox" id="check" class="checkbox" id="check">
              <h3 class="task" id="tasks">${
                document.querySelector(".search_input").value
              }</h3>
              <i class="fa fa-trash"></i>
          </div>
          `;
      document.querySelector(".search_input").value = "";
  
      var divlist = document.querySelectorAll(".task_list").length;
      document.querySelector(".no_of_tasks").innerHTML = divlist + " Tasks";
  
      var current_tasks = document.querySelectorAll(".fa-trash");
  
      for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
          this.parentNode.remove();
          var divlist = document.querySelectorAll(".task_list").length;
          document.querySelector(".no_of_tasks").innerHTML =
            divlist + " Tasks";
        };
      }
    }
  };
  
function set_columns() {
    var project_list = document.getElementById("project_list")
    var w = window.innerWidth;
    var first_project = document.getElementById("first_project");
    var child_w = first_project.offsetWidth * 1.1;
    var num = ~~(w / child_w);
    num = Math.min(num, 3);
    // console.log(min(num, 3), num, 3);
    project_list.style.setProperty("--num_cols", num);
}

window.onresize = set_columns;
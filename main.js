function startPage()
{
  selectTab(1);
}

function selectTab(int)
{
    document.getElementById("item".concat(int)).classList.add("selected");
    document.getElementById("page".concat(int)).classList.remove("hide");
    document.getElementById("page".concat(int)).classList.add("show");
    for(let i = 1; i < 4; i++)
      if(int != i) hideTab(i);
}

function hideTab(int)
{
  document.getElementById("item".concat(int)).classList.remove("selected");
  document.getElementById("page".concat(int)).classList.add("hide");
  document.getElementById("page".concat(int)).classList.remove("show");
}
document.addEventListener("DOMContentLoaded", () => {
  navigateToPage(location.pathname, false);

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const pageId = e.target.id.replace("goto ", "");
      navigateToPage("/" + pageId, true);
    });
  });

  window.addEventListener("popstate", (e) => {
    navigateToPage(location.pathname, false);
  });
});

function navigateToPage(pathname, updateHistory) {
  const pageId = pathname === "/index.html" ? "1" : pathname.substring(1);
  document.querySelectorAll("div").forEach((div) => {
    div.style.display = "none";
  });
  document.getElementById(pageId).style.display = "block";
  if (updateHistory) {
    // 2nd argument doesn't do anything. It exists for historical reasons, but must be included. You can pass any value and it will be ignored.
   // history.pushState({ pageId }, "", `/${pageId}`); -adds page id
   history.pushState({ pageId }, "", ``);
  }

}

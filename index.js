$(document).ready(function () {

  /* ── Desktop: hover dropdown ── */
  $(".nav-links .has-sub").hover(
    function () { $(this).find(".slide-down").stop(true, true).slideDown(180); },
    function () { $(this).find(".slide-down").stop(true, true).slideUp(180); }
  );

  /* ── Mobile Drawer: باز/بسته کردن ── */
  function openDrawer() {
    $("#mobileDrawer").addClass("open");
    $("#drawerOverlay").addClass("open");
    $("body").css("overflow", "hidden");
  }

  function closeDrawer() {
    $("#mobileDrawer").removeClass("open");
    $("#drawerOverlay").removeClass("open");
    $("body").css("overflow", "");
  }

  $("#hamburgerBtn").on("click", openDrawer);
  $("#drawerClose").on("click", closeDrawer);
  $("#drawerOverlay").on("click", closeDrawer);

  /* بستن با کلید Escape */
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });

  /* ── Drawer: زیرمنوی دسته‌بندی‌ها ── */
  $(".drawer-has-sub").on("click", function (e) {
    e.preventDefault();
    var $parent = $(this).closest(".has-sub");
    var $sub = $parent.find(".drawer-sub");

    $parent.toggleClass("sub-open");
    $sub.slideToggle(220);
  });

  /* ── Filter chips ── */
  $(".chip").on("click", function () {
    $(".chip").removeClass("active");
    $(this).addClass("active");
  });

});
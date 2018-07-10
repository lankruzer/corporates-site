import $ from 'jquery';

// tabs
if (document.querySelector('.tabs')) {
	var btn_tabs_node = document.querySelectorAll('.tabs-nav__li');
	var btn_tabs = [btn_tabs_node.length];
	var tab_items_node = document.querySelectorAll('.tabs-content__tab');
	var tab_items = [tab_items_node.length];

	for (var i = 0; i < btn_tabs_node.length; i++) {
		btn_tabs[i] = btn_tabs_node.item(i);
		tab_items[i] = tab_items_node.item(i);
	}

	btn_tabs[0].classList.add('tabs-nav__li_active');
	tab_items[0].classList.add('tabs-content__tab_active');

	btn_tabs.forEach(function(btn_tab, i, btn_tabs) {
		btn_tab.addEventListener('click', function(event) {
			if (!this.classList.contains('tabs-nav__li_active')) {
				event.preventDefault();
				for (var y = 0; y < btn_tabs.length; y++) {
					if (btn_tabs[y].classList.contains('tabs-nav__li_active')) {
						btn_tabs[y].classList.remove('tabs-nav__li_active');
						$(tab_items[y]).slideUp(250);
						tab_items[y].classList.remove('tabs-content__tab_active');
					}
				}
				btn_tab.classList.add('tabs-nav__li_active');
				$(tab_items[i]).slideDown(250);
				tab_items[i].classList.add('tabs-content__tab_active');
			}
		});
	});
}
// /tabs

const tabs = document.querySelectorAll('[data-tab-value]')
        const tabInfos = document.querySelectorAll('[data-tab-info]')
  
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document
                    .querySelector(tab.dataset.tabValue);
  
                tabInfos.forEach(tabInfo => {
                    tabInfo.classList.remove('active')
                })
                target.classList.add('active');
            })
        })

        function actif(id) {
            document.getElementById('1').style.color='#A9A9A9';
            document.getElementById('2').style.color='#A9A9A9';
            document.getElementById('3').style.color='#A9A9A9';
            document.getElementById(id).style.color='black';
        }
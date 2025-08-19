const organisations = [
    { name: "St John's Hospice", slug: "st-johns-hospice" },
    { name: "Weldmar Hospice", slug: "weldmar-hospice" },
    { name: "Community Hospice", slug: "community-hospice" },
    { name: "Mountbatten Hospice", slug: "mountbatten-hospice" }
];

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('orgSearch');
    const dropdown = document.getElementById('searchDropdown');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length === 0) {
            hideDropdown();
            return;
        }

        const filteredOrgs = organisations.filter(org => 
            org.name.toLowerCase().includes(query)
        );

        showDropdown(filteredOrgs, query);
    });

    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length > 0) {
            const query = this.value.toLowerCase().trim();
            const filteredOrgs = organisations.filter(org => 
                org.name.toLowerCase().includes(query)
            );
            showDropdown(filteredOrgs, query);
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            hideDropdown();
        }
    });

    function showDropdown(orgs, query) {
        dropdown.innerHTML = '';
        
        if (orgs.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'dropdown-item no-results';
            noResults.textContent = 'No organisations found';
            dropdown.appendChild(noResults);
        } else {
            orgs.forEach(org => {
                const item = document.createElement('div');
                item.className = 'dropdown-item';
                item.innerHTML = highlightMatch(org.name, query);
                item.addEventListener('click', () => selectOrganisation(org));
                dropdown.appendChild(item);
            });
        }

        dropdown.classList.add('show');
    }

    function hideDropdown() {
        dropdown.classList.remove('show');
        dropdown.innerHTML = '';
    }

    function highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    function selectOrganisation(org) {
        searchInput.value = org.name;
        hideDropdown();
        
        setTimeout(() => {
            window.location.href = `training-${org.slug}.html`;
        }, 150);
    }
});
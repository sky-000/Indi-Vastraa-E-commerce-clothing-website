        // Navigation functionality
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all nav items
                document.querySelectorAll('.nav-item').forEach(nav => {
                    nav.classList.remove('active');
                });
                
                // Add active class to clicked nav item
                this.classList.add('active');
                
                // Hide all content sections
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show target section
                const targetId = this.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });

        // Profile tab navigation
        document.querySelectorAll('.profile-nav-item').forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all nav items
                document.querySelectorAll('.profile-nav-item').forEach(nav => {
                    nav.classList.remove('active');
                });
                
                // Add active class to clicked nav item
                this.classList.add('active');
                
                // Hide all profile tabs
                document.querySelectorAll('.profile-tab').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // Show target tab
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Button interactions
        document.querySelectorAll('.btn-accept').forEach(button => {
            button.addEventListener('click', function() {
                const row = this.closest('tr');
                row.querySelector('.status').textContent = 'Accepted';
                row.querySelector('.status').className = 'status status-active';
                row.querySelector('td:last-child').innerHTML = '<button class="action-btn btn-view">View Details</button>';
                
                // Show success message
                alert('Order accepted successfully!');
            });
        });
        
        document.querySelectorAll('.btn-reject').forEach(button => {
            button.addEventListener('click', function() {
                if(confirm('Are you sure you want to reject this order?')) {
                    const row = this.closest('tr');
                    row.remove();
                    
                    // Show rejection message
                    alert('Order rejected successfully!');
                }
            });
        });
        
        document.querySelectorAll('.btn-complete').forEach(button => {
            button.addEventListener('click', function() {
                const row = this.closest('tr');
                row.querySelector('.status').textContent = 'Completed';
                row.querySelector('.status').className = 'status status-completed';
                row.querySelector('td:last-child').innerHTML = '<span style="color: var(--gray);">Completed</span>';
                
                // Show success message
                alert('Delivery marked as completed!');
            });
        });
        
        // Mark notifications as read
        document.querySelector('.notifications').addEventListener('click', function() {
            document.querySelector('.notification-count').style.display = 'none';
        });
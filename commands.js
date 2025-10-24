 function isValidEmail(email) {
            // Very basic regex check
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        // Function to display messages (error or success)
        function displayMessage(message, isError = false) {
            const messageBox = document.getElementById('messageBox');
            messageBox.textContent = message;
            messageBox.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');

            if (isError) {
                messageBox.classList.add('bg-red-100', 'text-red-700');
            } else {
                messageBox.classList.add('bg-green-100', 'text-green-700');
            }
        }

        // Main form submission handler
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Get form fields
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const examLevel = document.getElementById('examLevel').value;
            const password = document.getElementById('password').value;

            // --- Basic Validation Checks ---

            if (!fullName || !email || !examLevel || !password) {
                displayMessage("Please fill in all required fields (Name, Email, Level, Password).", true);
                return;
            }

            if (!isValidEmail(email)) {
                displayMessage("Please enter a valid email address.", true);
                return;
            }

            if (password.length < 8) {
                displayMessage("Password must be at least 8 characters long.", true);
                return;
            }

            // --- If validation passes ---
            
            // In a real application, you would send this data to a server here (e.g., using fetch API).
            // Since this is a basic demonstration, we will just show a success message.
            
            console.log("Form Data Submitted:", {
                fullName,
                email,
                examLevel,
                subject: document.getElementById('subject').value.trim(),
                password: '*** (Redacted)'
            });

            displayMessage("Registration Successful! You now have access to the past papers.", false);
            
            // Optional: Clear the form after successful submission
            // this.reset();
        });
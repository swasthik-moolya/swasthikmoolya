<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission_form</title>
    <!-- Add your CSS styles here -->
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        .success-message {
            color: green;
        }
        .error-message {
            color: red;
        }
    </style>
</head>
<body>
    <h2>Submission Form</h2><?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validate data
    if (empty($name) || empty($email) || empty($message)) {
        // Handle empty fields error
        header("Location: contact.php?status=error");
        exit;
    }

    // Email receiver
    $to = "swasthikmoolya20@gmail.com"; // Replace with your email address

    // Email subject
    $subject = "Message from your Portfolio";

    // Email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";

    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Attempt to send email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        header("Location: contact.php?status=success");
        exit;
    } else {
        // Email sending failed
        header("Location: contact.php?status=error");
        exit;
    }
} else {
    // Redirect to contact page if accessed directly
    header("Location: contact.php");
    exit;
}
?>
</body>
</html>
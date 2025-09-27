<?php

$domain = $_SERVER['SERVER_NAME'];

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benefit Organization</title>
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
</head>

<body>

    <main class="min-h-screen">
        <div class="max-w-2xl p-6 mx-auto mt-10">
            <a href="./index.html" class="py-2 px-6 rounded text-white bg-blue-500 mb-6 block w-fit">Back</a>
            <h3 class="text-3xl font-bold mb-4">Contact us</h3>
            <p class="mb-4">We are an advertising company. If you have questions about individual products, please visit their website by following the corresponding link. We will unfortunately be unable to help you with any customer service issues.</p>
            <p class="font-bold">We do NOT send emails.</p>
            <p class="mb-4">If you wish to unsubscribe, kindly direct your request to the appropriate company, as we are unable to process such requests.</p>
            <p class="mb-4">Feel free to contact us about advertising opportunities.</p>
            <p class="font-semibold">info@<?= $domain ?>.com</p>
        </div>

    </main>

    <footer class="bg-gray-100 border-t border-t-1 border-t-gray-200 mt-8">
        <div
            class="mx-auto max-w-7xl overflow-hidden px-6 py-8 lg:px-8 text-sm sm:text-md leading-5 sm:leading-6 text-gray-500" style="display: flex;justify-content: space-evenly;align-items: center;">
            <p>@2025. All rights Reserved. </p>
            <p class="text-center text-blue-400">
                <span>
                    <a href="./privacy.php" target="_blank">Privacy Policy</a> |
                    <a href="./terms.php" target="_blank">Terms &amp; Conditions</a> |
                    <a href="./contact.php" target="_blank">Contact Us</a>
                </span>
            </p>
        </div>
    </footer>

</body>

</html>
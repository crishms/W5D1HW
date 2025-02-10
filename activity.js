$(document).ready(function() {
    // Apply pointer cursor to selectable cells (not headers or 'Not Available' cells)
    $('#activities table td').not('.first-child, th').css('cursor', 'pointer');  // Allow pointer cursor for selectable cells

    // Click event to toggle selection on a cell
    $('#activities table td').click(function() {
        // Only apply actions to cells that are not "Not Available" or headers
        if ($(this).text() !== "Not Available" && !$(this).is('th')) {
            // Toggle the 'selected' class on click to highlight/unhighlight
            $(this).toggleClass('selected');
        }
    });

    // Optional: Hover effect for better UX on hover over selectable cells
    $('#activities table td').hover(function() {
        if ($(this).text() !== "Not Available" && !$(this).is('th')) {
            $(this).css('background-color', '#f2f2f2'); // Light grey on hover
        }
    }, function() {
        if (!$(this).hasClass('selected')) {
            $(this).css('background-color', ''); // Reset to original background if not selected
        }
    });
});

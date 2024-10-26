document.addEventListener("DOMContentLoaded", function() {

    const resizer = document.getElementById('resizer');
    const editorContainer = document.getElementById('editorContainer');
    const svgContainer = document.getElementById('svgEditor');

    const resizerUpdateEvent = new Event('resizer-update');

    // Handle mousedown event
    resizer.addEventListener('mousedown', function (e) {
      e.preventDefault();

      // Set the initial positions and widths
      let startX = e.clientX;
      let initialEditorWidth = editorContainer.getBoundingClientRect().width;
      let initialSvgWidth = svgContainer.getBoundingClientRect().width;

      // Handle the mousemove event
      function onMouseMove(e) {
        const deltaX = e.clientX - startX;
        const newEditorWidth = initialEditorWidth + deltaX;
        const newSvgWidth = initialSvgWidth - deltaX;

        // Update the width of both containers
        editorContainer.style.width = `${newEditorWidth}px`;
        svgContainer.style.width = `${newSvgWidth}px`;

        window.dispatchEvent(resizerUpdateEvent);
      }

      // Handle mouseup event
      function onMouseUp() {
        // Remove event listeners when dragging is finished
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      // Add event listeners for mousemove and mouseup
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });


});



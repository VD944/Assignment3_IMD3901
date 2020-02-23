AFRAME.registerComponent('blue',{
    schema : {},
    init : function() {
        const Context_AF = this;

        //Add event listeners
        Context_AF.el.addEventListener('click', function(event) {
            console.log("clickedB");
            socket.emit('blue');
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });

    },
});
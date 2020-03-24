$(document).ready(function(){
// MyApp = new BackBone.Marionette.Application();

let basicModel=Backbone.Model.extend({
    defaults: {
        text: 'shit'
    },
    // constructor: function basicModel(arguments, options) {
    //     Backbone.Model.prototype.constructor.apply
    // }
})

let basicView  = Backbone.View.extend({
    render: function(){
        $(this.el).html(_.template($('#template').html(), {simple: this.model.get('text')}))
    }
});

let myBasicModel = new basicModel({text: 'poop'})

let myBasicView=new basicView({model: myBasicModel, el: '.region'})

myBasicView.render()
})
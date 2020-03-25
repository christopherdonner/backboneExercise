$(document).ready(function(){
// MyApp = new BackBone.Marionette.Application();

let basicModel=Backbone.Model.extend({
    defaults: {
        text: 'shit',
        count: 0,
        title: 'count'
    },
    increase: function() {
        console.log('up')
        this.set('count', this.get('count')+=1)
    },
    decrease: function(){
        console.log('down')
        this.set('count', this.get('count')-=1)
    }
})

let basicView  = Backbone.View.extend({
    initialize: function() {
        this.model.on('change', this.render, this);
    },

    events: {
        "click #buttonUp": 'buttonUp',
        "click #buttonDown": 'buttonDown'
    },

    buttonUp: function(){
        console.log('increase')
        this.model.increase()
    },
    buttonDown: function(){
        console.log('decrease')
        this.model.decrease()
    },
    render: function(){
        $(this.el).html(_.template($('#template').html(), {
            count: this.model.get('count'),
        }));
        return this;
    }
});

let myBasicModel = new basicModel({count: 1})

let myBasicView=new basicView({model: myBasicModel, el: '.region'})

myBasicView.render()
})
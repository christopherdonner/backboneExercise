$(document).ready(function(){

let basicModel=Backbone.Model.extend({

    defaults: {
        count: 0
    },
    
    increase: function() {
        console.log('up')
        this.set('count', this.get('count')+1)
    },
    decrease: function(){
        console.log('down')
        this.set('count', this.get('count')-1)
    }
})

var basicView  = Backbone.View.extend({

    initialize: function() {
        this.model.on('change', this.render, this);
        console.log('init')
    },

    events: {
        "click #increment_button": 'increment',
        "click #decrement_button": 'decrement'
    },

    increment: function(){
        console.log('increase')
        this.model.increase()
    },

    decrement: function(){
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
myBasicModel.increase()
myBasicView.decrement()
myBasicView.render()
})
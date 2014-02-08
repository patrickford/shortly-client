Shortly.LinkView = Backbone.View.extend({

  className: 'link',

  template: _.template(' \
      <img src="/redirect_icon.png"/> \
      <div class="info"> \
        <div class="visits"><span class="count"><%= visits %></span>Visits</div> \
        <div class="title"><%= title %></div> \
        <div class="original"><%= url %></div> \
        <a href="<%= base_url %>/<%= code %>"><%= base_url %>/<%= code %></a> \
        <div class="lastvisit">Last visited at: <%= updated_at %> \
      </div>'
  ),

  render: function() {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }

});

// <button ng-click="orderBy='created_at'">Created At</button>
// <input type="text" ng-model="search" placeholder="search />"
// <div class="links">
//   <div class="link"
//       ng-repeat="link in links | filter:search | orderBy:'visits' ">
//       <img src="/redirect_icon.png"/> \
//       <div class="info"> \
//         <div class="visits"><span class="count">{{ link.visits }}</span>Visits</div> \
//         <div class="title">{{ link.title }}</div> \
//         <div class="original">{{ link.url }}</div> \
//         <a href="{{ link.base_url }}/{{ link.code }}">{{ link.base_url }}/<%= code %></a> \
//         <div class="lastvisit">Last visited at: {{ link.updated_at}} \
//       </div>
//   </div>
// </div>
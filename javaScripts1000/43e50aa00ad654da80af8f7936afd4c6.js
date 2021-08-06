function setPagination(element, opts)
{
   $(element).paging(opts.total,
   {
      format: '< ncnn (- p) >',
      perpage: opts.perpage,
      onSelect: function (page)
      {
         if(document.readyState !== 'complete') return;
         $.ajax({
            url: opts.url,
            type: 'POST',
            data:
            {
               op: opts.op,
               load: opts.load,
               page: page.toString(),
               fld_id: opts.fld_id,
               usr_login: opts.usr_login
            },
            success: function(result)
            {
               $(opts.target).html(result);
            }
         });
      },
      onFormat: function (type)
      {
         var show_right = this.pages > 4;
         var show_block = !show_right || this.value != this.pages;
         if(this.pages <= 1) return '&nbsp;';
         /* TODO: looks ugly, needs refactoring */
         switch (type)
         {
            case 'right':
               if(!show_right) return '';
               return show_right
                  ? '<a>' + this.value + '</a>'
                  : '';
            case 'block':
               if(!show_block) return '';
               return this.value == this.page
                  ? '<span>' + this.value + '</span>'
                  : '<a>' + this.value + '</a>';
            case 'next': // >
               return '<a href="#" class="next">Next <div id="triangle-right"></div></a>';
            case 'prev': // <
               return '<a href="#" class="prev"><div id="triangle-left"></div> Prev</a>'
            case 'fill':
               return show_right ? ".." : '';
         }
      }
   });
   $(element).css('cursor', 'pointer');
}

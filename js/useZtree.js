var zTree;
var demoIframe;

var setting = {
  view: {
    dblClickExpand: false,
    showLine: true,
    selectedMulti: false
  },
  data: {
    simpleData: {
      enable:true,
      idKey: "id",
      pIdKey: "pId",
      rootPId: ""
    }
  },
  callback: {
    beforeClick: function(treeId, treeNode) {
      var zTree = $.fn.zTree.getZTreeObj("tree");
      if (treeNode.isParent) {
        zTree.expandNode(treeNode);
        return false;
      } else {
        // demoIframe.attr("src",treeNode.file + ".html");
        if (treeNode.type == "time") {
          $("#flip").hide();
          $("#time").show();
          return true;
        } else {
          $("#time").hide();
          $("#flip").show();
          return true;
        }
      }
    }
  }
};

var zNodes =[
  { name:"父节点1 - 展开", open:true,
    children: [
      { name:"父节点11 - 折叠",
        children: [
          {id:1, pId:101,  name:"叶子节点111", type:"time"},
          {id:1, pId:102,  name:"叶子节点112", type:"flip"},
          {id:1, pId:103,  name:"叶子节点113"},
          {id:1, pId:104,  name:"叶子节点114"}
        ]},
      { name:"父节点12 - 折叠",
        children: [
          {id:2, pId:201,  name:"叶子节点121"},
          {id:2, pId:202,  name:"叶子节点122"},
          {id:2, pId:203,  name:"叶子节点123"},
          {id:2, pId:204,  name:"叶子节点124"}
        ]},
      { name:"父节点13 - 没有子节点", isParent:true}
    ]},
  { name:"父节点2 - 折叠",
    children: [
      { name:"父节点21 - 展开", open:true,
        children: [
          { name:"叶子节点211"},
          { name:"叶子节点212"},
          { name:"叶子节点213"},
          { name:"叶子节点214"}
        ]},
      { name:"父节点22 - 折叠",
        children: [
          { name:"叶子节点221"},
          { name:"叶子节点222"},
          { name:"叶子节点223"},
          { name:"叶子节点224"}
        ]},
      { name:"父节点23 - 折叠",
        children: [
          { name:"叶子节点231"},
          { name:"叶子节点232"},
          { name:"叶子节点233"},
          { name:"叶子节点234"}
        ]}
    ]},
  { name:"父节点3 - 没有子节点", isParent:true}

];

// $(document).ready(function(){
// 			$.fn.zTree.init($("#tree"), setting, zNodes);
// });


	$(document).ready(function(){
		var t = $("#tree");
		t = $.fn.zTree.init(t, setting, zNodes);
		demoIframe = $("#testIframe");
		demoIframe.bind("load", loadReady);
		var zTree = $.fn.zTree.getZTreeObj("tree");
		zTree.selectNode(zTree.getNodeByParam("id", 101));

	});

	function loadReady() {
		var bodyH = demoIframe.contents().find("body").get(0).scrollHeight,
		htmlH = demoIframe.contents().find("html").get(0).scrollHeight,
		maxH = Math.max(bodyH, htmlH), minH = Math.min(bodyH, htmlH),
		h = demoIframe.height() >= maxH ? minH:maxH ;
		if (h < 530) h = 530;
		demoIframe.height(h);
	}

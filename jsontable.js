
if (typeof (jsonTable) === "undefined")
{
    var jsonTable = (function()
    {
        var _data = [];
        var _targetId;
        var _tableClass;
        var _keys = [];

        function _BuildHeaderRow()
        {
            var output = "<tr>";

            for (var i = 0; i < _keys.length; i++)
            {
                output += "<th>" + _keys[i] + "</th>";
            }

            output += "<tr>";

            return output;
        }

        function _BuildRow(rowData)
        {
            var output = "<tr>";

            for (var i = 0; i < _keys.length; i++)
            {
                output += "<td>" + ((typeof (rowData[_keys[i]]) !== "undefined")?rowData[_keys[i]]:"") + "</td>";
            }

            output += "<tr>";

            return output;
        }

        function _BuildTableHtml()
        {
            
            if (_data.length < 1)
            {
                return "";
            }
            var outputHtml = "<table cellpadding=\"0\" cellspacing=\"0\" " + ((typeof (_tableClass) !== "undefined") ? "class=\"" + _tableClass + "\" >" : ">");
            outputHtml += _BuildHeaderRow(_data[0]);

            for (var i = 0; i < _data.length; i++)
            {
                outputHtml += _BuildRow(_data[i]);
            }

            return outputHtml + "</table>";
        }

        function _GetKeys()
        {
            _keys = [];
            if (_data.length < 1)
                return;

            var keys = [];
            for (var i = 0; i < _data.length; i++)
            {
                keys = Object.keys(_data[i]);
                for (var j = 0; j < keys.length; j++)
                {
                    if (_keys.indexOf(keys[j]) < 0)
                    {
                        _keys.push(keys[j]);
                    }
                }
            }
            
        }


        function BuildTable(obj)
        {
            _targetId = obj.targetId;
            _data = obj.data;
            _tableClass = obj.tableClass;

            _GetKeys();
            document.getElementById(_targetId).innerHTML = _BuildTableHtml();
        }


        return {
            BuildTable: BuildTable
        }
    })();
}

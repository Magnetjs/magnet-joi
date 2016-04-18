'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('magnet-core/dist/base');

var _base2 = _interopRequireDefault(_base);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_bluebird2.default.promisifyAll(_joi2.default);

var Validation = function (_Base) {
  _inherits(Validation, _Base);

  function Validation() {
    _classCallCheck(this, Validation);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Validation).apply(this, arguments));
  }

  _createClass(Validation, [{
    key: 'setup',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.app.Joi = _joi2.default;

                // TODO: Turn into middleware or use future koa-joi-router
                this.app.validation = function validationMiddleware(type, schema, options) {
                  return function () {
                    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
                      var data, result;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              data = void 0;
                              _context.t0 = type;
                              _context.next = _context.t0 === 'query' ? 4 : _context.t0 === 'params' ? 6 : _context.t0 === 'body' ? 8 : 10;
                              break;

                            case 4:
                              data = ctx.query;
                              return _context.abrupt('break', 11);

                            case 6:
                              data = ctx.params;
                              return _context.abrupt('break', 11);

                            case 8:
                              data = ctx.request.body;
                              return _context.abrupt('break', 11);

                            case 10:
                              throw new Error('Type is not provide');

                            case 11:
                              _context.next = 13;
                              return _joi2.default.validate(data, schema, options);

                            case 13:
                              result = _context.sent;

                              if (!result.error) {
                                _context.next = 18;
                                break;
                              }

                              ctx.status = 400;
                              ctx.body = result;
                              return _context.abrupt('return');

                            case 18:
                              _context.t1 = type;
                              _context.next = _context.t1 === 'query' ? 21 : _context.t1 === 'params' ? 23 : _context.t1 === 'body' ? 25 : 27;
                              break;

                            case 21:
                              ctx.query = result.value;
                              return _context.abrupt('break', 28);

                            case 23:
                              ctx.params = result.value;
                              return _context.abrupt('break', 28);

                            case 25:
                              ctx.request.body = result.value;
                              return _context.abrupt('break', 28);

                            case 27:
                              throw new Error('Type is not provide');

                            case 28:
                              _context.next = 30;
                              return next();

                            case 30:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));

                    function validationMiddleware(_x, _x2) {
                      return ref.apply(this, arguments);
                    }

                    return validationMiddleware;
                  }();
                };

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setup() {
        return ref.apply(this, arguments);
      }

      return setup;
    }()
  }]);

  return Validation;
}(_base2.default);

exports.default = Validation;